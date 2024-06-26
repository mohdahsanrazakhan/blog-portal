import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free" // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = { multi: true };

const UploadFile = ({ onFileUpload }) => (
  <UploadDropzone uploader={uploader}
    options={options}
    onUpdate={files => {
      const fileUrls = files.map(x => x.fileUrl);
      onFileUpload(fileUrls[0]);
    }}
    width="600px"
    height="300px"
  />
);

export default UploadFile;