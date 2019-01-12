import * as plugins from './smartstring.plugins';

const algorithm = 'aes-256-ctr';

export class Cryptr {
  private key: Buffer;

  constructor(secret) {
    if (!secret || typeof secret !== 'string') {
      throw new Error('Cryptr: secret must be a non-0-length string');
    }

    this.key = plugins.crypto
      .createHash('sha256')
      .update(String(secret))
      .digest();
  }

  encrypt(value: string) {
    if (value == null) {
      throw new Error('value must not be null or undefined');
    }

    const iv = plugins.crypto.randomBytes(16);
    const cipher = plugins.crypto.createCipheriv(algorithm, this.key, iv);
    const encrypted = cipher.update(String(value), 'utf8', 'hex') + cipher.final('hex');

    return iv.toString('hex') + encrypted;
  }

  decrypt(value: string) {
    if (value == null) {
      throw new Error('value must not be null or undefined');
    }

    const stringValue = String(value);
    const iv = Buffer.from(stringValue.slice(0, 32), 'hex');
    const encrypted = stringValue.slice(32);

    const decipher = plugins.crypto.createDecipheriv(algorithm, this.key, iv);
    return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
  }
}
