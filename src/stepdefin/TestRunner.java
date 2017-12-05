/**
 * 
 */
package stepdefin;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin={"html:output"},
		features = {"classpath:featurefiles/dailyroutine.feature"}
		)
/**
 * @author HAOSHU FENG
 * @version 1.0
 * @since Nov 9, 2017 10:02:18 AM 
 */
public class TestRunner {

}
