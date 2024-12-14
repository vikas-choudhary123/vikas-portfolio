import ProtoTypes from 'prop-types'
import React from 'react'
import Skill from './Skill';

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
    return (
        <div className={"flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transitions-colors group" + classes}>
            <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
                <img 
                src={imgSrc} 
                alt={label}
                width={32}
                height={32}
                />
            </figure>

            <div>
                <h3>{label}</h3>

                <p className="">
                    {desc}
                </p>
            </div>
        </div>
    );
}

SkillCard.protoTypes = {
    imgSrc: ProtoTypes.string.isRequired,
    label: ProtoTypes.string.isRequired,
    desc: ProtoTypes.string.isRequired,
    classes: ProtoTypes.string
}
export default SkillCard