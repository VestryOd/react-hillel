import React from 'react';
import { useParams, useRouteMatch  } from 'react-router-dom'

export default function AlbumPage() {
  const { userId, albumId } = useParams();
  return (
    <div>
      Hello {albumId}
    </div>
  )
}
