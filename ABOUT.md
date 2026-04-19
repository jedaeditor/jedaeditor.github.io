# Jeda

A desktop application for automated video silence detection and cutting. Built with Electron + React.

## Overview

Jeda analyzes video files to detect silence sections, allowing users to automatically remove silent portions from videos. Perfect for creating "silent cuts" or "away messages" compilations.

## Features

### Core Functionality
- **Silence Detection** - Automatically detect silent sections in video audio
- **Visual Timeline** - See waveform with highlighted silence regions
- **Adjustable Cuts** - Drag cut points to fine-tune each silence region
- **Render Range** - Choose which portion of video to process
- **Export** - Cut video using FFmpeg (bundled with app)

### UI/UX
- **Adaptive Layout** - Horizontal (wide) or Vertical (tall) based on video aspect ratio
- **Resizable Panels** - Drag to resize preview section
- **Dark Theme** - Easy on the eyes, uses #FF8400 accent color
- **Jump Playback** - Preview the final cut result by skipping silence during playback

### Project Management
- **Save/Load Projects** - Save work as .acproj files
- **Presets** - Detection presets (Default, Talking Head, Podcast, Aggressive Cut, Gentle)
- **Export Presets** - Quality settings (High Quality, Medium, Fast/Low, Custom)
- **Settings Persistence** - Remembers last used settings

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| Ctrl+O | Open video |
| Ctrl+D | Detect silence |
| Ctrl+E | Cut/Export video |
| Space | Play/Pause |
| J | Toggle Jump Playback |
| Ctrl+Z | Undo |
| Ctrl+Y | Redo |
| Delete | Remove selected silence |
| + / - | Zoom timeline |
| ? | Show shortcuts |

## Tech Stack

- **Framework**: Electron 33 + React 18 + TypeScript
- **Video Processing**: FFmpeg (bundled)
- **Audio Analysis**: WebAV + Web Audio API
- **State Management**: Zustand
- **Build**: Vite + vite-plugin-electron + electron-builder
- **Icons**: Ionicons

## Requirements

- **macOS** - App runs on macOS (arm64/dmg), supports native codecs
- **Windows** - App runs on Windows (x64/nsis)
- **FFmpeg** - Bundled with app (fallback if system FFmpeg not found)

## Video Format Support

| Format | macOS | Windows |
|--------|-------|---------|
| MP4 | Direct | Direct |
| MKV | Direct | Direct |
| WebM | Direct | Direct |
| MOV | Direct | Transcode* |
| AVI | Direct | Transcode* |

*On Windows, some formats (.mov, .avi) use codecs not supported by the browser. The app will ask to transcode to a web-compatible format (H.264/AAC) before playback. This is automatic on macOS.

## Installation

### From DMG (macOS)
1. Download `Jeda-x.x.x-arm64.dmg`
2. Open and install to Applications

### From NSIS (Windows)
1. Download `Jeda-Setup-x.x.x.exe`
2. Run the installer

## Usage

1. **Open Video** - Click the empty area or press Ctrl+O
2. **Detect Silence** - Adjust parameters and click "Detect Silence"
   - Threshold: Sensitivity (-40dB default)
   - Min Duration: Minimum silence length (0.5s default)
   - Padding: Buffer around cuts (0.2s default)
3. **Review Cuts** - Click silence regions in the list or timeline to edit
4. **Adjust Range** - Use render range sliders to limit output
5. **Export** - Click "Cut Video" to process and save

### Detection Presets
- **Default**: Balanced settings for general use
- **Talking Head**: More aggressive, good for talking videos
- **Podcast**: Designed for speech-only content
- **Aggressive Cut**: Removes even short pauses
- **Gentle**: Only removes very long silences

### Export Presets
- **High Quality**: CRF 18, slow encoding
- **Medium**: CRF 23, balanced
- **Fast/Low**: CRF 28, fast encoding
- **Custom**: User-defined settings

## Limitations

1. **Real-time Preview** - True real-time cut preview not feasible in JS. Uses hybrid approach (timeline visualization + single playback).
2. **WebCodecs Export** - Not available in Electron. Using FFmpeg for export.
3. **Video Format Support** - MP4, MOV, MKV, AVI, WebM
