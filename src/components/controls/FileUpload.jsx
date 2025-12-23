export default function FileUpload({ onChange }) {
  return (
    <input
      type="file"
      onChange={(e) => onChange(e.target.files[0])}
      className="text-xs"
    />
  );
}
