"use client";
import { useState } from 'react';
import Div from '../Div';

interface VideoModalProps {
  videoSrc: string;
  bgUrl: string;
  variant?: string;
}

export default function VideoModal({ videoSrc, bgUrl, variant }: VideoModalProps) {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    const video = videoSrc.split('?v=')[1].trim();
    setIframeSrc(`https://www.youtube.com/embed/${video}`);
    setToggle(!toggle);
  };

  const handleClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  return (
    <>
      <Div
        className={`cs-video_block ${variant ? variant : 'cs-style1'} cs-video_open cs-bg`}
        style={{ backgroundImage: `url(${bgUrl})` }}
        onClick={handleClick}
      >
        <span className="cs-player_btn cs-accent_color">
          <span />
        </span>
      </Div>
      <Div className={toggle ? 'cs-video_popup active' : 'cs-video_popup'}>
        <Div className="cs-video_popup_overlay" />
        <Div className="cs-video_popup_content">
          <Div className="cs-video_popup_layer" />
          <Div className="cs-video_popup_container">
            <Div className="cs-video_popup_align">
              <Div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={iframeSrc}
                  title="video modal"
                />
              </Div>
            </Div>
            <Div className="cs-video_popup_close" onClick={handleClose} />
          </Div>
        </Div>
      </Div>
    </>
  );
}
