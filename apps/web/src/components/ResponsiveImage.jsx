function ResponsiveImage({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority,
  height,
  objectPosition,
  sizes,
  width
}) {
  return (
    <img
      alt={alt}
      className={className}
      decoding="async"
      fetchpriority={fetchPriority}
      height={height}
      loading={loading}
      sizes={sizes}
      src={src}
      width={width}
      style={objectPosition ? { objectPosition } : undefined}
    />
  )
}

export default ResponsiveImage
