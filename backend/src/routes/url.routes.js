import {Router} from 'express'
import {updateLongUrl,redirectToLongUrl,getAllUrls,getContact} from '../controllers/url.controller.js'


const urlRoute=Router()

urlRoute.route("/shorten").post(updateLongUrl)

urlRoute.route("/contact").post(getContact)


urlRoute.route("/getAll").get(getAllUrls)


urlRoute.route("/r/:shortId").get(redirectToLongUrl)





export default urlRoute