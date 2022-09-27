export enum CookieKey {
  SUBDOMAIN_TOKEN = "subdomainToken",
  ACCESS_TOKEN = "ACCESS_TOKEN", // homehub app からのセッションを引き継ぐ
}

export default class Cookie {
  public static get = (key: CookieKey) => {
    for (const c of document.cookie.split(";")) {
      const cArray = c.split("=");
      if (cArray[0].trim() === key) {
        return decodeURIComponent(cArray[1]);
      }
    }
    return null;
  };

  public static expire = (key: CookieKey) => {
    document.cookie = `${key}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  };

  public static remove = (key: CookieKey) => {
    document.cookie = `${key}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;Domain=.${document.domain
      .split(".")
      .splice(1)
      .join(".")}`;
  };
}
