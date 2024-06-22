function getLoginUrl() {
  const url = window.location.href.split("?")[0];
  return `https://quail.ink/dashboard/login?exchange=${encodeURIComponent(
    url
  )}&ephemeral=1`;
}
