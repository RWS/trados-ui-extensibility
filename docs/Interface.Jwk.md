[Trados User Interface Extensibility v1.0.0](../wiki/globals) / Jwk

# Interface: Jwk

A Json Web Key. 
<br>
See https://datatracker.ietf.org/doc/html/rfc7517 for details.

## Export

Jwk

## Properties

### alg?

> `optional` **alg**: `string`

The algorithm intended for use with the key.

#### Memberof

Jwk

#### Source

lc-public-api/models/index.ts:1754

***

### e?

> `optional` **e**: `string`

The RSA public exponent e.

#### Memberof

Jwk

#### Source

lc-public-api/models/index.ts:1748

***

### kid?

> `optional` **kid**: `string`

The "kid" (key ID) parameter is used to match a specific key.

#### Memberof

Jwk

#### Source

lc-public-api/models/index.ts:1760

***

### kty?

> `optional` **kty**: `string`

The cryptographic algorithm
   family used with the key.

#### Memberof

Jwk

#### Source

lc-public-api/models/index.ts:1736

***

### n?

> `optional` **n**: `string`

The RSA public modulus n.

#### Memberof

Jwk

#### Source

lc-public-api/models/index.ts:1742

***

### use?

> `optional` **use**: `string`

The "use" parameter is employed to indicate whether a public key is used for encrypting data or verifying the signature on data.

#### Memberof

Jwk

#### Source

lc-public-api/models/index.ts:1766
