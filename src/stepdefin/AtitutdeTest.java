package stepdefin;



import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class AtitutdeTest {
	@Given("^we work in \"([^\"]*)\"$")
	public void we_work_in(String ss) throws Throwable {
		System.out.println("we work in " + ss);
	   	}
	
	@When("^we meet \"([^\"]*)\"$")
	public void we_meet_(String arg1) throws Throwable {
		
		if(arg1.equals("watchmen"))
		{
			System.out.println("we meet watchmen ");
		}
		if(arg1.equals("cabdriver"))
		{
			System.out.println("we meet cabdriver");
		}
		if(arg1.equals("homboo"))
		{
			System.out.println("we meet homboo");
		}
		
	}

	@Then("^we \"([^\"]*)\" him$")
	public void we_skipGreeting_him(String yn) throws Throwable {
		if(yn.equals("yes")){
			System.out.println("we greated him");
		}
		if(yn.equals("no")){
			System.out.println("we don't greated him");
		}
		
	}
}
	
		
	


