import React, { Fragment, useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Window from './Window';
import ITEM_TYPE from '../Data/Types';
import { freemem } from 'os';

const Item = ({ item, index, moveItem, status }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex == hoverIndex) {
                return
            }
            const hoveredRect = ref.currrent.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    })

    cosnt[{ isDragging }, drag] = useDrag({
        item: { type: ITEM_TYPE, ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);
    const onClose = () => setShow(false);
    drag(drop(ref));
    return (
        <Fragment>
            <div ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={'item'}
                onClick={onOpen}
            ></div>
        </Fragment>
    );
};

export default Item;