function ResponsiveImage({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority,
  objectPosition
}) {
  return (
    <img
      alt={alt}
      className={className}
      decoding="async"
      fetchpriority={fetchPriority}
      loading={loading}
      src={src}
      style={objectPosition ? { objectPosition } : undefined}
    />
  )
}

export default ResponsiveImage
