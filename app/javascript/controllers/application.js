import { Application } from "@hotwired/stimulus"
import { Confetti } from "stimulus-confetti"

const application = Application.start()

// register controllers
application.register('confetti', Confetti)

// configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
