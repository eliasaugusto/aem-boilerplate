export default function decorate(block) {
  const img = block.querySelector('img');
  const heading = block.querySelector('h1');
  const text = block.querySelector('p');

  block.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'banner__inner';

  const media = document.createElement('div');
  media.className = 'banner__media';
  if (img) media.append(img.closest('picture') || img);

  const content = document.createElement('div');
  content.className = 'banner__content';
  if (heading) content.append(heading);
  if (text) content.append(text);

  wrapper.append(media, content);
  block.append(wrapper);
}
