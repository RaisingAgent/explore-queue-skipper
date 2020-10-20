// content.js

function fnSkipThroughExploreQueue() {
	var span = document.createElement("SPAN");
	span.innerHTML = "ExQSkip";
	span.style.color = "lime";
	span.style.fontWeight = "normal"; 
	document.getElementById("global_action_menu").insertBefore(span, document.getElementById("global_action_menu").firstChild); // add "ExQSkip text in lime green at the top of the page"
	var btnNextInQueue = document.getElementsByClassName("btn_next_in_queue")[0]; // Button "Next in Queue >"
	var btnDiscoverQueueRefresh = document.getElementById("refresh_queue_btn"); // small button "Start another queue"
	var btnDiscoverQueueStart = document.getElementById("discovery_queue_start_link"); // big overlay with "queue graphics"
	if (btnNextInQueue) {
			btnNextInQueue.click();
	} else {
		if (document.getElementsByClassName("subtext").length) {
			if (!hasNumber(document.getElementsByClassName("subtext")[0].innerText)) { // check whether all free cards have been collected
				var span2 = document.createElement("SPAN");
				span2.innerText = "ALL CARDS COLLECTED. COME BACK TOMORROW.";
				span2.style.color = "lime";
				span2.style.paddingLeft = "30px";
				document.getElementsByClassName("discovery_queue_apps")[0].childNodes[3].appendChild(span2); // add text indicating the script is done successfully
				document.getElementsByClassName("keepGoing")[0].innerText = "Explore Queue Skipper done. Come back tomorrow."; // change text to indicate this
				document.getElementsByClassName("keepGoing")[0].style.color = "lime"; // change color for immediate visual feedback that the script is done		
			} else if (document.getElementById("discovery_queue_ctn") && document.getElementById("discovery_queue_ctn").style.display === "none" && btnDiscoverQueueRefresh) {
				btnDiscoverQueueRefresh.click();
			}	else if (document.getElementsByClassName("discover_queue_empty winter_sale" && document.getElementsByClassName("discover_queue_empty winter_sale")[0].style.display === "none" && btnDiscoverQueueStart)) {
				btnDiscoverQueueStart.click();
			}
		}
	}
}

function hasNumber(string) { // https://stackoverflow.com/a/28813213/6799340
  return /\d/.test(string);
}

fnSkipThroughExploreQueue();