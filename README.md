# muehlemann_com

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Note to myself

Convert GIF to mp4:

    ffmpeg -i insta-xmasleds.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2"  insta-xmasleds.mp4

Convert GIF to webm:

    ffmpeg -i insta-xmasleds.gif -c:v libvpx -crf 12 -auto-alt-ref 0 -b:v 500K insta-xmasleds.webm

Reduce MP4 from Snaggit for use on this size:

    ffmpeg -i greifenseeschwimmen.mp4  -vcodec libx264 -crf 18 greifenseeschwimmen-lower.mp4

Convert to webm:

    ffmpeg -i greifenseeschwimmen.mp4  -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2"  greifenseeschwimmen.webm

Note: You need both mp4 and webm for cross browser support.

For images, use https://processing.compress-or-die.com/webp-process
