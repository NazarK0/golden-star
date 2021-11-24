const distance = (a, b) => {
  const _difference = (a, b) => {
    if (a > b) return a - b
    else if (b > a) return b - a
    else return 0;
  }
        

    assert len(a) == len(b)
    dist = 0
    for (i in range(0, len(a))
    {
      
    }
        dist += _difference(a[i], b[i])
    return dist
}
    


const average_colour(pixels):
    channels = len(pixels[0, 0])
    colours = [0] * channels
    for x in range(0, image.width):
        for y in range(0, image.height):
            for channel in range(0, channels):
                colours[channel] += pixels[x, y][channel]

    colours = list(map(lambda x: int(x / (image.width * image.height)), colours))
    return colours
