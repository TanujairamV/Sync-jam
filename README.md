<div align="center">

<h1 align="center">Spicetify Jam

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Lexend+Giga&size=30&pause=1200&color=1db954&center=true&vCenter=true&width=900&lines=Real+time+listening+sessions+for+Spotify;Listen+with+your+friends" />
</p>


<p>
  <img src="https://img.shields.io/badge/version-1.0.0-1db954?style=for-the-badge&logo=spotify">
  <img src="https://img.shields.io/badge/spicetify-extension-1db954?style=for-the-badge">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge">
</p>

</div>

Spicetify Jam lets you create shared listening sessions with friends. Playback stays in sync, tracks can be shared through a common queue, and everything works directly inside Spotify.

---

## Features

- Real-time playback synchronization
- Shared queue
- Spotify profile pictures
- Optional guest playback controls
- Automatic playback resync
- Join using a room code or link

---

## Installation

Make sure you have Spicetify installed first.

### Windows

```powershell
winget install --id Git.Git -e --source winget
winget install OpenJS.NodeJS.LTS
Set-ExecutionPolicy RemoteSigned -Scope Current
git clone https://github.com/TanujairamV/spicetify-jam
cd spicetify-jam
npm install
npm run build
spicetify config extensions spicetify-jam.js
spicetify apply
```

### Linux / macOS

```bash
git clone https://github.com/TanujairamV/spicetify-jam
cd spicetify-jam
npm install
npm run build
spicetify config extensions spicetify-jam.js
spicetify apply
```

---

## Usage

### Host

1. Open the Jam panel.
2. Start a session.
3. Share the room code or join link.
4. Control playback and manage the shared queue.

### Guest

1. Open the Jam panel.
2. Join using the room code or link.
3. Playback will stay synchronized with the host.

---

## Contributing

Issues and pull requests are welcome.

---

## License

Released under the MIT License.

## Credits

Thanks to [Keyzenkms](https://github.com/Kyzenkms) for the base code