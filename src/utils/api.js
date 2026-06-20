/**
 * Resolves the backend API base URL dynamically.
 * Detects the client's network IP (e.g. 192.168.x.x) or falls back to 127.0.0.1 (preferred over localhost in Windows due to IPv6 loopback issues).
 * Handles production vs development environment variables.
 */
export function getApiBase(fallbackPort = 5001) {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    // If the site is accessed via LAN IP or hostname (like 192.168.29.27),
    // point API requests to port 5001 on that same LAN address.
    if (
      hostname &&
      hostname !== "localhost" &&
      hostname !== "127.0.0.1" &&
      hostname !== "::1"
    ) {
      return `http://${hostname}:${fallbackPort}`;
    }
  }
  
  // Preferred local network fallback is 127.0.0.1 to avoid Windows IPv6 resolution latency or blockages
  const defaultLocal = `http://127.0.0.1:${fallbackPort}`;
  return process.env.NEXT_PUBLIC_API_URL || defaultLocal;
}
