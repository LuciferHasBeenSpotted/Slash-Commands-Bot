import { join } from 'path';
import { readdir } from 'fs/promises';

export default function(dir, callback) {
  dir = join(process.cwd(), dir);
  readdir(dir).then(dirnames => {
    for(const dirname of dirnames) {
      readdir(join(dir, dirname)).then(filenames => {
        for(const filename of filenames) {
          callback(join(dir, dirname, filename));
        };
      });
    };
  });
};
