#!/usr/bin/env python3
import os
import shutil
import cv2
import numpy as np

def build_hero_assets():
    base_dir = r"C:\Users\Lenovo\OneDrive\Desktop\portfolie"
    input_video = os.path.join(base_dir, "public", "intro-video.mp4")
    hero_dir = os.path.join(base_dir, "public", "hero")
    os.makedirs(hero_dir, exist_ok=True)
    
    mp4_out = os.path.join(hero_dir, "hero.mp4")
    webm_out = os.path.join(hero_dir, "hero.webm")
    portrait_out = os.path.join(base_dir, "public", "portrait-bust.webp")
    og_out = os.path.join(base_dir, "public", "og.jpg")
    
    if os.path.exists(input_video):
        # 1. Copy video to hero.mp4 and hero.webm
        shutil.copy(input_video, mp4_out)
        shutil.copy(input_video, webm_out)
        print(f"Exported hero video streams to {mp4_out} and {webm_out}")
        
        # 2. Extract portrait-bust.webp (head-to-shirt crop 480x600)
        cap = cv2.VideoCapture(input_video)
        ret, frame = cap.read()
        if ret:
            h, w, _ = frame.shape
            # Crop upper bust (head to shirt)
            crop_w = int(w * 0.5)
            crop_h = int(h * 0.7)
            start_x = int((w - crop_w) / 2)
            start_y = int(h * 0.05)
            bust = frame[start_y:start_y+crop_h, start_x:start_x+crop_w]
            bust_resized = cv2.resize(bust, (480, 600))
            cv2.imwrite(portrait_out, bust_resized)
            print(f"Exported portrait bust to {portrait_out}")
            
            # 3. Export OpenGraph image og.jpg (1200x630)
            og_frame = cv2.resize(frame, (1200, 630))
            cv2.imwrite(og_out, og_frame)
            print(f"Exported OpenGraph image to {og_out}")
            
        cap.release()
    else:
        print(f"Error: {input_video} does not exist.")

if __name__ == "__main__":
    build_hero_assets()
