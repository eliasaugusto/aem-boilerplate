export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div > div')];

  const imageUrl = rows[0]?.textContent?.trim();
  const title = rows[1]?.textContent?.trim();
  const text = rows[3]?.textContent?.trim();

  console.log(rows);

  block.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'banner__inner';

  if (imageUrl) {
    const media = document.createElement('div');
    media.className = 'banner__media';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title || '';

    media.append(img);
    wrapper.append(media);
  }

  const content = document.createElement('div');
  content.className = 'banner__content';

  if (title) {
    const h1 = document.createElement('h1');
    h1.textContent = title;
    content.append(h1);
  }

  if (text) {
    const p = document.createElement('p');
    p.textContent = text;
    content.append(p);
  }

  wrapper.append(content);
  block.append(wrapper);
}
