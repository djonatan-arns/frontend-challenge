import pictureSvg from '@/assets/picture.svg'

import './styles.css'

interface FilePreviewProps {
  fileName: string
  fileSize: string
}

export function FilePreview({ fileName, fileSize }: FilePreviewProps) {
  return (
    <div className="file-preview">
      <div className="file-preview__image">
        <img src={pictureSvg} alt={fileName} className="file-preview__img" />
      </div>
      <div className="file-preview__info">
        <span className="file-preview__name">{fileName}</span>
        <span className="file-preview__size">{fileSize}</span>
      </div>
    </div>
  )
}
