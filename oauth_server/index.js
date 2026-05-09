import express from "express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import { randomBytes, createHash } from "crypto"
import { SignJWT, exportJWK, importPKCS8 } from "jose"

const app = express()


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

const client = new Map();
const authorizationCodes = new Map();
const refreshTokens = new Map();

client.set("demo-client", {
  client_id: "demo-client",
  redirectUris: ["http://localhost:4000/callback"],
});

const PRIVATE_KEY_PEM = " DKSJB28DNEKODB292UJAOUPXKNysnmdNdjmBbdndn" // dummy one

const ISSUER = "http://localhost:3000";
const KEY_ID = "demo-key-1"