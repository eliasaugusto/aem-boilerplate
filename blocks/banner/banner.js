function normalizeKey(text) {
    return (text || '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');
}

function readKeyValueBlock(block) {
    const data = {};

    [...block.children].forEach((row) => {
        const keyEl = row.children?.[0];
        const valueEl = row.children?.[1];

        const key = normalizeKey(keyEl?.textContent);
        if (!key || !valueEl) return;

        data[key] = valueEl;
    });

    return data;
}

export default function decorate(block) {
    const data = readKeyValueBlock(block);

    // pega os valores
    const imageUrl = data.image?.textContent?.trim();
    const title = data.title?.textContent?.trim();
    const description = data.description?.textContent?.trim();

    // limpa o markup original (tabela)
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

    if (description) {
        const p = document.createElement('p');
        p.textContent = description;
        content.append(p);
    }

    wrapper.append(content);
    block.append(wrapper);
}