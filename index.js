'use strict';

const Buffer = require('buffer').Buffer;

exports.PUBLIC_KEY_SIZE = 32;
exports.PRIVATE_KEY_SIZE = 64;
exports.SIGNATURE_SIZE = 64;

exports.HASH_SIZE = 32;
exports.HASH_KEY = Buffer.from('---hyperbloom---');
exports.MAX_CHAIN_LENGTH = 5;
