import React from "react";
import { Tooltip } from '@heroui/tooltip';
import { FiGithub, FiCode } from "react-icons/fi";
import { TbSlideshow } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

// React Icons: https://react-icons.github.io/react-icons/

const LinkIcon = ({item, size}) => {
    switch (item) {
        case 'GitHub':
            return (
                <Tooltip content="GitHub" color="secondary" placement="bottom">
                    <span><FiGithub size={size} /></span>
                </Tooltip>
            );
        case 'Demo':
            return (
                <Tooltip content="Demo" color="secondary" placement="bottom">
                    <span><FiCode size={size} /></span>
                </Tooltip>
            );
        case 'Research Paper':
            return (
                <Tooltip content="Research Paper" color="secondary" placement="bottom">
                    <span><HiOutlineDocumentText size={size} /></span>
                </Tooltip>
            );
        case 'Slides Presentation':
            return (
                <Tooltip content="Slides Presentation" color="secondary" placement="bottom">
                    <span><TbSlideshow size={size} /></span>
                </Tooltip>
            );
        case 'Poster Summary':
            return (
                <Tooltip content="Poster Summary" color="secondary" placement="bottom">
                    <span><TbSlideshow size={size} /></span>
                </Tooltip>
            );
        case 'Website':
            return (
                <Tooltip content="Website" color="secondary" placement="bottom">
                    <span><SlGlobe size={size} /></span>
                </Tooltip>
            );
        case 'LinkedIn':
            return (
                <Tooltip content="LinkedIn" color="secondary" placement="bottom">
                    <span><FaLinkedin size={size} /></span>
                </Tooltip>
            );
        default:
            return null;
    }
}

export default LinkIcon;