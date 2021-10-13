const borderBottomRight = (element) => {
  element.style.borderBottom = '1px solid #DEDEDF';
  element.style.borderRight = '1px solid #DEDEDF';
};

const borderBottom = (element) => {
  element.style.borderBottom = '1px solid #DEDEDF';
}

const borderRight = (element) => {
  element.style.borderRight = '1px solid #DEDEDF';
}

function addBorders(objects, size) {
    const lastRow = objects.length - size;
    const rollOver = size -1;
    objects.forEach((pixel, i) => {
        if (i < lastRow) {
            i % size === rollOver ? borderBottom(pixel) : borderBottomRight(pixel);
        } else {
            if (i % size !== rollOver) {
                borderRight(pixel);
            };
        };
    });
};

function removeBorders(objects) {
    objects.forEach(pixel => pixel.style.border = 'none');
};

const borderResources = { addBorders, removeBorders };

export default borderResources;