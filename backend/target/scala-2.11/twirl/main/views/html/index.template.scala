
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


    <meta name="visual-pool/config/environment" content="%7B%22modulePrefix%22%3A%22visual-pool%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22/%22%2C%22locationType%22%3A%22auto%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%7D%2C%22APP%22%3A%7B%22name%22%3A%22visual-pool%22%2C%22version%22%3A%220.0.0+1fc36cea%22%7D%2C%22LOG_DIALOG%22%3Atrue%2C%22languages%22%3A%5B%7B%22code%22%3A%22ru%22%7D%2C%7B%22code%22%3A%22en%22%7D%5D%2C%22ember-dialog%22%3A%7B%22layoutPath%22%3A%22layouts%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D" />

    <link rel="stylesheet" href="/assets/vendor.css">
    <link rel="stylesheet" href="/assets/visual-pool.css">


  </head>
  <body>


    <script src="/assets/vendor.js"></script>
    <script src="/assets/visual-pool.js"></script>
  <script>
          (function(i,s,o,g,r,a,m)"""),format.raw/*26.35*/("""{"""),format.raw/*26.36*/("""i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()"""),format.raw/*26.86*/("""{"""),format.raw/*26.87*/("""
                      """),format.raw/*27.23*/("""(i[r].q=i[r].q||[]).push(arguments)"""),format.raw/*27.58*/("""}"""),format.raw/*27.59*/(""",i[r].l=1*new Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          """),format.raw/*29.11*/("""}"""),format.raw/*29.12*/(""")(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-40849842-3', 'auto');
          ga('send', 'pageview');

  </script>
    <div id="ember-bootstrap-wormhole"></div>
  </body>

</html>"""))
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
                  DATE: Tue Aug 08 16:51:37 JST 2017
                  SOURCE: /Users/aldo/Projects/GitHub/VisualPool/backend/app/views/index.scala.html
                  HASH: fec8f03e05a3684f51477b0ff7c2aee906f9e493
                  MATRIX: 520->1|616->3|643->4|1833->1166|1862->1167|1940->1217|1969->1218|2020->1241|2083->1276|2112->1277|2291->1428|2320->1429
                  LINES: 20->1|25->1|26->2|50->26|50->26|50->26|50->26|51->27|51->27|51->27|53->29|53->29
                  -- GENERATED --
              */
          