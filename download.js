(() => {
  const API = 'https://api.github.com/repos/berkiosbuinu-server/berkos_siteweb/releases/latest';
  const RELEASES = 'https://github.com/berkiosbuinu-server/berkos_siteweb/releases';
  const status = document.getElementById('release-status');
  const msiButton = document.getElementById('download-msi');
  const exeButton = document.getElementById('download-exe');
  const msiDetail = document.getElementById('msi-detail');
  const exeDetail = document.getElementById('exe-detail');
  const releasesLink = document.getElementById('releases-link');
  if (releasesLink) releasesLink.href = RELEASES;

  function setInstaller(button, detail, asset, label) {
    if (asset && asset.browser_download_url) {
      button.href = asset.browser_download_url;
      button.classList.remove('disabled');
      button.removeAttribute('aria-disabled');
      button.setAttribute('download', asset.name);
      button.innerHTML = `Télécharger ${label} <span>↓</span>`;
      detail.textContent = `${asset.name} · ${formatSize(asset.size)}`;
    } else {
      button.href = RELEASES;
      button.classList.add('disabled');
      button.setAttribute('aria-disabled', 'true');
      button.innerHTML = `${label} indisponible <span>↗</span>`;
      detail.textContent = `Aucun fichier .${label.toLowerCase()} trouvé dans la dernière release.`;
    }
  }
  function formatSize(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return 'taille inconnue';
    return bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} Mo` : `${Math.ceil(bytes / 1024)} Ko`;
  }
  function setStatus(message, kind = '') {
    status.textContent = message;
    status.classList.remove('error', 'success');
    if (kind) status.classList.add(kind);
  }
  [msiButton, exeButton].forEach(button => button.addEventListener('click', event => {
    if (button.getAttribute('aria-disabled') === 'true') {
      event.preventDefault();
      window.open(RELEASES, '_blank', 'noopener,noreferrer');
    }
  }));

  async function loadRelease() {
    try {
      const response = await fetch(API, { headers: { Accept: 'application/vnd.github+json' }, cache: 'no-store' });
      if (response.status === 404) throw new Error('Aucune release publiée pour le moment.');
      if (!response.ok) throw new Error(`GitHub a répondu avec le statut ${response.status}.`);
      const release = await response.json();
      const assets = Array.isArray(release.assets) ? release.assets : [];
      const msi = assets.find(asset => /\.msi$/i.test(asset.name));
      const exe = assets.find(asset => /\.exe$/i.test(asset.name));
      setInstaller(msiButton, msiDetail, msi, 'MSI');
      setInstaller(exeButton, exeDetail, exe, 'EXE');
      const version = release.tag_name || release.name || 'dernière version';
      if (msi && exe) setStatus(`Version détectée : ${version}. Les deux installateurs Windows sont disponibles.`, 'success');
      else if (msi || exe) setStatus(`Version détectée : ${version}. Un seul des deux formats est actuellement publié.`, 'error');
      else setStatus(`Version ${version} détectée, mais aucun fichier MSI ou EXE n'est joint à cette release.`, 'error');
    } catch (error) {
      setInstaller(msiButton, msiDetail, null, 'MSI');
      setInstaller(exeButton, exeDetail, null, 'EXE');
      setStatus(`${error.message || 'Impossible de contacter GitHub.'} Consultez la page des versions pour vérifier les fichiers publiés.`, 'error');
    }
  }
  loadRelease();
})();
