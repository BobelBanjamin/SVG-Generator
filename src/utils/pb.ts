import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";
var path = '';
if (import.meta.env.MODE === 'development')
    path = 'http://localhost:8090'
else
    path = 'https://pb.exam.banjamin-bobel.com'

const pb = new PocketBase(path) as TypedPocketBase;
export default pb;
