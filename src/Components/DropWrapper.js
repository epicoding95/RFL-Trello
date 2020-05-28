import React, { Fragment } from 'react';
import { useDrop } from 'react-dnd';
import ITEM_TYPE from '../Data/Types'
import { statuses } from '../Data/Index'
const DropWrapper = ({ onDrop, children, status }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            //this is what only allows to move one to the lefr or right
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })


    return (
        <div ref={drop} className={'drop-wrapper'}>
            {React.cloneElement(children, { isOver })}


        </div>
    );
};

export default DropWrapper;