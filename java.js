<script>
        function generateDisclaimer() {
            let websiteName = document.getElementById("websiteName").value.trim();
            let websitePurpose = document.getElementById("websitePurpose").value.trim();
            
            if (!websiteName || !websitePurpose) {
                document.getElementById("output").innerText = "Please fill in all fields.";
                document.getElementById("copyBtn").style.display = "none";
                return;
            }
            
            let disclaimerText = `
                Disclaimer for ${websiteName}
                
                The information provided on ${websiteName} is for general informational purposes only. All content on this site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                
                ${websitePurpose}
                
                Under no circumstance shall we have any liability for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                
                If you require any more information or have any questions about our site's disclaimer, please feel free to contact us.
            `;
            
            document.getElementById("output").innerText = disclaimerText;
            document.getElementById("copyBtn").style.display = "block";
        }

        function copyToClipboard() {
            let outputText = document.getElementById("output").innerText;
            navigator.clipboard.writeText(outputText).then(() => {
                alert("Disclaimer copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        }
    </script>
