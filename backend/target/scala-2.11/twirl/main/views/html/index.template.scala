
package views.html

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object index_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class index extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.4*/("""
"""),format.raw/*2.1*/("""<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>VisualPool</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="visual-pool/config/environment" content="%7B%22modulePrefix%22%3A%22visual-pool%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22/%22%2C%22locationType%22%3A%22auto%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%7D%2C%22APP%22%3A%7B%22name%22%3A%22visual-pool%22%2C%22version%22%3A%220.0.0+7d98136b%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D" />
    <link rel="stylesheet" href="/assets/vendor.css">
    <link rel="stylesheet" href="/assets/visual-pool.css">
  </head>

  <body>

  <script src="/assets/vendor.js"></script>
  <script src="/assets/visual-pool.js" ></script>

  <div id="ember-bootstrap-wormhole"></div>
  </body>

</html>
"""))
      }
    }
  }

  def render(): play.twirl.api.HtmlFormat.Appendable = apply()

  def f:(() => play.twirl.api.HtmlFormat.Appendable) = () => apply()

  def ref: this.type = this

}


}

/**/
object index extends index_Scope0.index
              /*
                  -- GENERATED --
                  DATE: Tue Jun 13 15:45:56 EDT 2017
                  SOURCE: /Users/aldo/Projects/GitHub/VisualPool/backend/app/views/index.scala.html
                  HASH: 7397bfa8ecdc38ed56a11441f28359eb050620b8
                  MATRIX: 520->1|616->3|643->4
                  LINES: 20->1|25->1|26->2
                  -- GENERATED --
              */
          