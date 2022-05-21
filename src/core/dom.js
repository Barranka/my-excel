class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
			? document.querySelector(selector)
			: selector;
  }
}

export function $() {
  return new Dom();
}

$.create = (tagName, classes= '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
}
