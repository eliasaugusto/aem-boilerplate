export default function decorate(block) {
  const data = readKeyValueBlock(block);

  const title = data.title?.textContent?.trim();
  const description = data.description?.textContent?.trim();
  const imgEl = data.image?.querySelector('img');

  block.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'banner__inner';

  if (imgEl) {
    const media = document.createElement('div');
    media.className = 'banner__media';
    media.append(imgEl);
    wrapper.append(media);
  }

  const content = document.createElement('div');
  content.className = 'banner__content';

  if (title) {
    const h1 = document.createElement('h1');
    h1.textContent = title;
    content.append(h1);
  }

  if (description) {
    const p = document.createElement('p');
    p.textContent = description;
    content.append(p);
  }

  wrapper.append(content);
  block.append(wrapper);
}
