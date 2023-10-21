/**
 * method to return a list of levels, portraying topic depth/diversity
 */
function getTopicDepthLevels() {
  return ['Basic', 'Intermediate', 'Advanced', 'Professional'];
}

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

export { getTopicDepthLevels };
export { EMAIL_REGEX };
