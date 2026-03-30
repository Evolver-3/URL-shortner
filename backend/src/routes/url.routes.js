import {Router} from 'express'
import {updateLongUrl} from '../controllers/url.controller.js'
import {redirectToLongUrl} from '../controllers/url.controller.js'

const urlRoute=Router()

urlRoute.route("/shorten").post(updateLongUrl)

urlRoute.route("/:shortId").get(redirectToLongUrl)

export default urlRoute