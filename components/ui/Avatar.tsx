type AvatarProps = {
    size?: number;
  };
  
  export default function Avatar({
    size = 120,
  }: AvatarProps) {
    return (
      <div
        style={{
          width: size,
          height: size,
        }}
        className="
          rounded-full
          bg-gray-200
          shadow-md
        "
      />
    );
  }