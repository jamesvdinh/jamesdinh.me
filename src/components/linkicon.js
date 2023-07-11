import React from "react";
import { Tooltip } from '@nextui-org/react';
import { FiGithub, FiCode } from "react-icons/fi";
import { TbSlideshow } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

// React Icons: https://react-icons.github.io/react-icons/

const LinkIcon = ({item, size}) => {
    switch (item) {
        case 'GitHub':
            return <Tooltip content="GitHub" color="secondary" placement="bottom"><FiGithub size={size} /></Tooltip>
        case 'Demo':
            return <Tooltip content="Demo" color="secondary" placement="bottom"><FiCode size={size} name="Demo" /></Tooltip>
        case 'Research Paper':
            return <Tooltip content="Research Paper" color="secondary" placement="bottom"><HiOutlineDocumentText size={size} /></Tooltip>
        case 'Slides Presentation':
            return <Tooltip content="Slides Presentation" color="secondary" placement="bottom"><TbSlideshow size={size} /></Tooltip>
        case 'Poster Summary':
            return <Tooltip content="Poster Summary" color="secondary" placement="bottom"><TbSlideshow size={size} /></Tooltip>
        case 'Website':
            return <Tooltip content="Website" color="secondary" placement="bottom"><SlGlobe size={size} /></Tooltip>
        case 'LinkedIn':
            return <Tooltip content="LinkedIn" color="secondary" placement="bottom"><FaLinkedin size={size} /></Tooltip>
        default:
            return null;
    }
}

export default LinkIcon;