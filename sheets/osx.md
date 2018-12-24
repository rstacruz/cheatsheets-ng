---
title: OS X
layout: 2017/sheet
---

### Locations of startup items

```
~/Library/LaunchAgents
/System/Library/LaunchAgents/
/System/Library/LaunchDaemons/
/Library/LaunchAgents/
/Library/LaunchDaemons/
```

Running `launchctl list` show you what launch scripts are currently loaded.

### Hide desktop icons

```
defaults write com.apple.finder CreateDesktop -bool false
killall Finder
```

### Auto-hide other windows on dock switch

```
defaults write com.apple.dock single-app -bool TRUE
killall Dock
```

```
defaults delete com.apple.dock single-app
killall Dock
```

### Flush DNS

```bash
killall -HUP mDNSResponder   # 10.8+
dscacheutil -flushcache      # 10.7 below
```

### Turn off spotlight

```bash
sudo vim /etc/hostconfig  # change SPOTLIGHT=-YES- to SPOTLIGHT=-NO-
mdutil -i off /
```

### Turn on/off proxy

```bash
sudo networksetup -setsocksfirewallproxystate Wi-Fi off
sudo networksetup -setsocksfirewallproxystate Ethernet off
sudo networksetup -setsocksfirewallproxy Wi-Fi 127.0.0.1 9999
sudo networksetup -setsocksfirewallproxy Ethernet 127.0.0.1 9999
sudo networksetup -setsocksfirewallproxystate Wi-Fi on
sudo networksetup -setsocksfirewallproxystate Ethernet on
```

### System utils

| Utility        | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| `networksetup` | Configure network (ip, dns, proxy, etc)                                      |
| `tmutils`      | Configure Time Machine (enable/disable, exclude path, delete snapshots, etc) |
| `mdutils`      | Manage Spotlight (enable/disable, exclude, etc)                              |
| `diskutil`     | Control disk (format, eject, unmount, etc)                                   |
| `launchctl`    | Control running "agents"                                                     |

### Useful utils

| Utility                 | Description                                                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `open`                  | open files and directories ([man](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/open.1.html))                      |
| `textutil`              | manipulate text files of various formats ([man](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/textutil.1.html))    |
| `pbcopy` _/_ `pbpaste`  | provide copying and pasting to the pasteboard ([man](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/pbcopy.1.html)) |
| `sips`                  | scriptable image processing system ([man](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/sips.1.html))              |
| `mdfind`                | finds files matching a given query ([man](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/mdfind.1.html))            |
| `screencapture`         | capture images from the screen ([man](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/screencapture.1.html))         |
| `defaults`              | access the Mac OS X user defaults system ([man](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/defaults.1.html))    |
| `/usr/libexec/airportd` |                                                                                                                                                              |
| `scutil`                |                                                                                                                                                              |

INFO: `Homebrew` ([link](https://brew.sh)) is highly recommended utility.
