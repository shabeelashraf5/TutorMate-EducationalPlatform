import { diskStorage } from 'multer';
import { extname } from 'path';

export const imageUploadOptions = {
  storage: diskStorage({
    destination: './uploads/images',

    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
      callback(null, filename);
    },
  }),
};
