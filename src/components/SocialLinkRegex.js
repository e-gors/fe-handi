function SocialLinkRegex(data, type) {
  const facebook = new RegExp(
    "^(?:https?://)?(?:www.)?facebook.com/[a-zA-Z0-9-_.]{1,30}/?$",
    "i"
  );
  const instagram = new RegExp(
    "^(?:https?://)?(?:www.)?instagram.com/[a-zA-Z0-9-_.]{1,30}/?$",
    "i"
  );
  const twitter = new RegExp(
    "^(?:https?://)?(?:www.)?twitter.com/[a-zA-Z0-9_]{1,15}(?:/w+)*$",
    "i"
  );

  if (type === "facebook" || type === "Facebook") {
    return facebook.test(data);
  } else if (type === "instagram" || type === "Instagram") {
    return instagram.test(data);
  } else {
    return twitter.test(data);
  }
}

export default SocialLinkRegex;
