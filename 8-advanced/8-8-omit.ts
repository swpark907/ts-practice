export{}
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  type VideoMeatadata = Omit<Video, 'url' | 'data' | 'h'>

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'http://...',
      data: 'byte-data..'
    }
  }

  function getVideoMeatadata(id: string): VideoMeatadata{
    return{
      id,
      title: 'title'
    }
  }
