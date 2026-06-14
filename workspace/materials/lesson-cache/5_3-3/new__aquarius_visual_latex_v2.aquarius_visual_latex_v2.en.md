%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBpcyBtb3N0bHkgc3ltYm9saWMsIGJ1dCBzdHVkZW50cyBiZW5lZml0IGZyb20gb25lIGNsZWFuIGNhc2NhZGUgYmxvY2sgZGlhZ3JhbSBzaG93aW5nIHRoYXQgUyBmb2xsb3dlZCBieSBpdHMgaW52ZXJzZSBTX2kgY29sbGFwc2VzIHRvIHRoZSBpZGVudGl0eSBzeXN0ZW0uIE5vIHRleHRib29rIGZpZ3VyZSBpcyBhdmFpbGFibGUsIGFuZCB0aGUgYXZhaWxhYmxlIHdlYiBzb3VyY2VzIGFyZSBub3QgcmVsZXZhbnQgdG8gaW52ZXJzZS1zeXN0ZW0gY2FzY2FkZSBkaWFncmFtcywgc28gYSBjdXN0b20gZ2VuZXJhdGVkIGxlY3R1cmUtbm90ZXMgdmlzdWFsIGlzIGp1c3RpZmllZC4iLCJjcmFtIjoiVXNlIHRoZSB2aXN1YWwgdG8gbWVtb3JpemUgdGhlIGV4YW0gdHJpZ2dlcjogY2FzY2FkZSBwcm9kdWN0IGVxdWFscyAxLiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgdG8gY29ubmVjdCB0cmFuc2Zlci1mdW5jdGlvbiByZWNpcHJvY2l0eSB3aXRoIHRoZSBpZGVhIG9mIHVuZG9pbmcgYSBzeXN0ZW0uIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWwgdG8gY2F0Y2ggdGhlIHRyYXAgdGhhdCBhbiBpbnZlcnNlIHN5c3RlbSBpcyBub3QgYSBuZWdhdGl2ZSBzeXN0ZW07IGl0IGlzIGEgcmVjaXByb2NhbCBzeXN0ZW0uIn0=" style="display:none;"></div>%%KC_END%%
# Inverse Systems

> **Section Objective:** Learn how an inverse system undoes another system in both transfer-function and impulse-response form.

## Concepts In This Section

- Inverse transfer function
- Cascade identity
- Impulse-response inverse condition
- Accumulator and backward-difference inverse pair

## 1. Inverse transfer function

If a system has transfer function \(H[z]\), its inverse system has transfer function \(H_i[z]\) — the reciprocal of \(H[z]\).

**Symbol meanings:**
- \(H[z]\): the original system's transfer function
- \(H_i[z]\): the inverse system's transfer function
- \(z\): the complex transform variable

**When to use it:** Any time a problem says "inverse system" or asks for the system that reverses or undoes another system.

### COMMON MISTAKE

Students often write \(-H[z]\) as the inverse. That is the negative system, not the inverse system. The inverse is \(1/H[z]\) — a reciprocal, not a sign flip.

$$H_i[z] = \frac{1}{H[z]}$$

## 2. Cascade identity

**Concrete example:** The original system from the textbook is \(H[z] = (z - 0.4)/(z - 0.7)\). Its inverse swaps numerator and denominator, giving \(H_i[z] = (z - 0.7)/(z - 0.4)\).

**Exam pattern:** If \(H[z]\) is a ratio of polynomials, the inverse transfer function is simply the flipped ratio — numerator becomes denominator and vice versa.

#### Warning

Do not change signs or subtract coefficients. The only operation is taking the reciprocal. Changing \(0.4\) to \(-0.4\) or \(0.7\) to \(-0.7\) is wrong unless it naturally results from flipping the fraction.

$$H_i[z] = \frac{z - 0.7}{z - 0.4}$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTWFrZSB0aGUgc3R1ZGVudCBpbnN0YW50bHkgcmVjb2duaXplOiBvcmlnaW5hbCBzeXN0ZW0gZm9sbG93ZWQgYnkgaW52ZXJzZSBzeXN0ZW0gZ2l2ZXMgb3V0cHV0IGVxdWFsIHRvIGlucHV0LiIsInN0YW5kYXJkIjoiVXNlIHRoZSBkaWFncmFtIHRvIGNvbm5lY3QgdGhlIHdvcmRzICd1bmRvZXMgdGhlIG9wZXJhdGlvbicgd2l0aCB0aGUgcHJvZHVjdCBcXChIW3pdSF9pW3pdXFwpLiIsInRvcF9zY29yZSI6IkhpZ2hsaWdodCB0aGF0IHRoZSBpbnZlcnNlIGJsb2NrIGlzIHJlY2lwcm9jYWwsIG5vdCBuZWdhdGl2ZSwgYW5kIHRoYXQgb3JkZXIgaW4gYSBjYXNjYWRlIHN0aWxsIHByb2R1Y2VzIGlkZW50aXR5IGZvciB0aGlzIHRyYW5zZmVyLWZ1bmN0aW9uIHByb2R1Y3QuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 Cascading a system \(H[z]\) with its inverse \(H_i[z] = 1/H[z]\) produces a composite transfer function of 1 — the output equals the input.*
![Illustration](/generated/gptimage2-1781423540286-2271.png)

## 3. Impulse-response inverse condition

When a system and its inverse are placed in cascade, their transfer functions multiply. Because \(H_i[z] = 1/H[z]\), the product is exactly 1.

**What unity means:** A transfer function of 1 is the identity system — the output signal is identical to the input signal. The second system completely cancels the effect of the first.

**Symbol meanings:**
- \(H[z]\): transfer function of the first system
- \(H_i[z]\): transfer function of the inverse system
- Product \(= 1\): identity, output equals input

### EXAM TRIGGER

If a problem says a system is "placed in cascade with its inverse," immediately multiply the transfer functions and set the product to 1.

### COMMON MISTAKE

Do not add the transfer functions, and do not set the product to zero. Zero would erase the signal entirely.

$$H[z]\,H_i[z] = 1$$

## 4. Accumulator and backward difference

In the \(z\)-domain, cascading two systems multiplies their transfer functions. The time-domain equivalent of multiplication is convolution. Therefore, if \(H[z] \cdot H_i[z] = 1\), the corresponding time-domain statement is that the impulse responses convolve to the discrete-time impulse \(\delta[n]\).

**Symbol meanings:**
- \(h[n]\): impulse response of the original system
- \(h_i[n]\): impulse response of the inverse system
- \(\ast\): convolution operator
- \(\delta[n]\): discrete-time unit impulse (equals 1 at \(n=0\), zero elsewhere)

### EXAM TRIGGER

If a problem gives two impulse responses and asks whether the systems are inverses, convolve them and check whether the result is \(\delta[n]\).

### COMMON MISTAKE

Do not check \(h[n] + h_i[n] = \delta[n]\). Addition is not the cascade operation. The correct condition uses convolution, not addition.

$$h[n] \ast h_i[n] = \delta[n]$$

## 4. Accumulator and backward difference

The accumulator has transfer function \(H[z] = z/(z-1)\). Its inverse is the backward-difference system with transfer function \(H_i[z] = (z-1)/z\) — the exact reciprocal.

**What each system does:**
- Accumulator: builds a running sum of all past and present input values
- Backward-difference: removes that accumulated effect by subtracting the previous output from the current one

**Cascade check:** \(\frac{z}{z-1} \cdot \frac{z-1}{z} = 1\) — confirmed identity.

**Impulse-response drill:** Their impulse responses \(h[n]\) and \(h_i[n]\) must convolve to \(\delta[n]\), consistent with the cascade identity.

### COMMON TRAP

Do not think "difference" just means a sign change. The backward-difference system is the inverse because its transfer function is the reciprocal of the accumulator's, not because it negates anything.

$$H_i[z] = \frac{z - 1}{z}$$

---
**📌 Key Takeaways**
- Inverse transfer function is the reciprocal: \(H_i[z] = 1/H[z]\) — not the negative \(-H[z]\).
- Cascade identity: \(H[z]\,H_i[z] = 1\), so the output equals the input — the signal passes through unchanged.
- Time-domain condition: \(h[n] \ast h_i[n] = \delta[n]\) — impulse responses must convolve to the unit impulse.
- Classic inverse pair: accumulator \(z/(z-1)\) and backward-difference \((z-1)/z\) are reciprocals with cascade product 1.

*Next, you will use these inverse-system ideas when checking system structures and realizations.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImludmVyc2VfdHJhbnNmZXJfZnVuY3Rpb24iLCJsYWJlbCI6IkludmVyc2UgdHJhbnNmZXIgZnVuY3Rpb24gaXMgdGhlIHJlY2lwcm9jYWwiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIGEgc3lzdGVtIGhhcyB0cmFuc2ZlciBmdW5jdGlvbiBcXChIW3pdXFwpLCB3aGF0IGlzIHRoZSB0cmFuc2ZlciBmdW5jdGlvbiBvZiBpdHMgaW52ZXJzZSBzeXN0ZW0/Iiwib3B0aW9ucyI6WyJBLiBcXCgtSFt6XVxcKSIsIkIuIFxcKEhbel0gLSAxXFwpIiwiQy4gXFwoMS9IW3pdXFwpIiwiRC4gXFwoSFt6XV4yXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhlIGludmVyc2Ugc3lzdGVtIG11c3QgdW5kbyB0aGUgb3JpZ2luYWwgc3lzdGVtLCBzbyBpdHMgdHJhbnNmZXIgZnVuY3Rpb24gaXMgdGhlIHJlY2lwcm9jYWw6IFxcKEhfaVt6XSA9IDEvSFt6XVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJBIG5lZ2F0aXZlIHN5c3RlbSBjaGFuZ2VzIHNpZ247IGl0IGRvZXMgbm90IGdlbmVyYWxseSB1bmRvIHRoZSBvcmlnaW5hbCBzeXN0ZW0uIiwiQiI6IlN1YnRyYWN0aW5nIDEgaGFzIG5vIGdlbmVyYWwgaW52ZXJzZS1zeXN0ZW0gbWVhbmluZy4iLCJEIjoiU3F1YXJpbmcgdGhlIHRyYW5zZmVyIGZ1bmN0aW9uIHJlcHJlc2VudHMgdHdvIGlkZW50aWNhbCBzeXN0ZW1zIGluIGNhc2NhZGUsIG5vdCBhbiBpbnZlcnNlLiJ9LCJoaW50IjoiQXNrIHdoYXQgbXVzdCBtdWx0aXBseSBcXChIW3pdXFwpIHRvIGdpdmUgMS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBcXChIW3pdID0gKHogLSAwLjQpLyh6IC0gMC43KVxcKSwgd2hpY2ggaW52ZXJzZSB0cmFuc2ZlciBmdW5jdGlvbiBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gXFwoKHogLSAwLjcpLyh6IC0gMC40KVxcKSIsIkIuIFxcKC0oeiAtIDAuNCkvKHogLSAwLjcpXFwpIiwiQy4gXFwoKHogKyAwLjQpLyh6ICsgMC43KVxcKSIsIkQuIFxcKCh6IC0gMC40KSh6IC0gMC43KVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBpbnZlcnNlIGlzIHRoZSByZWNpcHJvY2FsLCBzbyB0aGUgbnVtZXJhdG9yIGFuZCBkZW5vbWluYXRvciBzd2FwLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgY2hhbmdlcyB0aGUgc2lnbiwgYnV0IGl0IGRvZXMgbm90IHRha2UgdGhlIHJlY2lwcm9jYWwuIiwiQyI6IkNoYW5naW5nIG1pbnVzIHNpZ25zIHRvIHBsdXMgc2lnbnMgaXMgbm90IGFuIGludmVyc2Utc3lzdGVtIG9wZXJhdGlvbi4iLCJEIjoiTXVsdGlwbHlpbmcgbnVtZXJhdG9yIGFuZCBkZW5vbWluYXRvciBmYWN0b3JzIHRvZ2V0aGVyIGRvZXMgbm90IHByb2R1Y2UgdGhlIHJlY2lwcm9jYWwgdHJhbnNmZXIgZnVuY3Rpb24uIn0sImhpbnQiOiJSZWNpcHJvY2FsIG1lYW5zIGZsaXAgdGhlIHJhdGlvLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiY2FzY2FkZV9pZGVudGl0eSIsImxhYmVsIjoiQ2FzY2FkZSBvZiBhIHN5c3RlbSBhbmQgaXRzIGludmVyc2UgZ2l2ZXMgaWRlbnRpdHkiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgc2lnbmFsIHBhc3NlcyB0aHJvdWdoIFxcKFNcXCkgd2l0aCB0cmFuc2ZlciBmdW5jdGlvbiBcXChIW3pdXFwpLCB0aGVuIHRocm91Z2ggXFwoU19pXFwpIHdpdGggdHJhbnNmZXIgZnVuY3Rpb24gXFwoSF9pW3pdXFwpLiBJZiBcXChTX2lcXCkgaXMgdGhlIGludmVyc2Ugb2YgXFwoU1xcKSwgd2hhdCBpcyB0aGUgY29tcG9zaXRlIHRyYW5zZmVyIGZ1bmN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gXFwoSFt6XSArIEhfaVt6XVxcKSIsIkIuIFxcKEhbel0gLSBIX2lbel1cXCkiLCJDLiBcXChIW3pdXFwsSF9pW3pdID0gMVxcKSIsIkQuIFxcKEhbel1cXCxIX2lbel0gPSAwXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiQ2FzY2FkZSB0cmFuc2ZlciBmdW5jdGlvbnMgbXVsdGlwbHkuIEZvciBpbnZlcnNlIHN5c3RlbXMsIHRoZSBwcm9kdWN0IGlzIHVuaXR5LCBzbyB0aGUgY2FzY2FkZSBpcyB0aGUgaWRlbnRpdHkgc3lzdGVtLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkNhc2NhZGUgc3lzdGVtcyBtdWx0aXBseTsgdGhleSBkbyBub3QgYWRkLiIsIkIiOiJTdWJ0cmFjdGlvbiBpcyBub3QgdGhlIGNhc2NhZGUgcnVsZS4iLCJEIjoiQSB6ZXJvIHRyYW5zZmVyIGZ1bmN0aW9uIHdvdWxkIGVyYXNlIHRoZSBzaWduYWwsIG5vdCByZXByb2R1Y2UgaXQuIn0sImhpbnQiOiJDYXNjYWRlIG1lYW5zIG11bHRpcGx5IHRyYW5zZmVyIGZ1bmN0aW9ucy4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiY2FzY2FkZV9ibG9ja19kaWFncmFtIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJPYnNlcnZlIGEgY2FzY2FkZSBkaWFncmFtIHdoZXJlIFxcKHhbbl1cXCkgZW50ZXJzIFxcKEhbel1cXCksIHRoZW4gXFwoMS9IW3pdXFwpLCBhbmQgdGhlIG91dHB1dCBpcyBsYWJlbGVkIFxcKHlbbl1cXCkuIFdoYXQgc2hvdWxkIFxcKHlbbl1cXCkgZXF1YWwgZm9yIGFuIGlkZWFsIGludmVyc2UgcGFpcj8iLCJvcHRpb25zIjpbIkEuIFxcKDBcXCkiLCJCLiBcXCgteFtuXVxcKSIsIkMuIFxcKHhbbl1cXCkiLCJELiBcXChIW3pdXFwseFtuXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBjYXNjYWRlIGhhcyB0cmFuc2ZlciBmdW5jdGlvbiAxLCBzbyB0aGUgb3V0cHV0IGVxdWFscyB0aGUgb3JpZ2luYWwgaW5wdXQ6IFxcKHlbbl0gPSB4W25dXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6Ilplcm8gb3V0cHV0IHdvdWxkIG1lYW4gdGhlIGNhc2NhZGUgZGVzdHJveXMgdGhlIHNpZ25hbC4iLCJCIjoiQSBuZWdhdGl2ZSBvdXRwdXQgd291bGQgbWVhbiBzaWduIHJldmVyc2FsLCBub3QgaWRlbnRpdHkuIiwiRCI6IlRoYXQgd291bGQgYmUgdGhlIG91dHB1dCBhZnRlciB0aGUgZmlyc3Qgc3lzdGVtIG9ubHksIGJlZm9yZSB0aGUgaW52ZXJzZSB1bmRvZXMgaXQuIn0sImhpbnQiOiJJZGVudGl0eSBzeXN0ZW0gbWVhbnMgaW5wdXQgcGFzc2VzIHRocm91Z2ggdW5jaGFuZ2VkLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ2aXN1YWxfb3JfZGVtb19vYnNlcnZhdGlvbl9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiaW1wdWxzZV9yZXNwb25zZV9pbnZlcnNlIiwibGFiZWwiOiJJbXB1bHNlIHJlc3BvbnNlcyBjb252b2x2ZSB0byBkZWx0YSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCB0aW1lLWRvbWFpbiBjb25kaXRpb24gY29uZmlybXMgdGhhdCB0d28gTFRJIHN5c3RlbXMgYXJlIGludmVyc2VzPyIsIm9wdGlvbnMiOlsiQS4gXFwoaFtuXSArIGhfaVtuXSA9IFxcZGVsdGFbbl1cXCkiLCJCLiBcXChoW25dIFxcYXN0IGhfaVtuXSA9IFxcZGVsdGFbbl1cXCkiLCJDLiBcXChoW25dIC0gaF9pW25dID0gMVxcKSIsIkQuIFxcKGhbbl1cXCxoX2lbbl0gPSAwXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiSW4gdGhlIHRpbWUgZG9tYWluLCBjYXNjYWRlIGNvcnJlc3BvbmRzIHRvIGNvbnZvbHV0aW9uLiBJbnZlcnNlIHN5c3RlbXMgbXVzdCBjb252b2x2ZSB0byB0aGUgaW1wdWxzZSBcXChcXGRlbHRhW25dXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkFkZGl0aW9uIGlzIG5vdCB0aGUgY2FzY2FkZSBvcGVyYXRpb24gZm9yIGltcHVsc2UgcmVzcG9uc2VzLiIsIkMiOiJTdWJ0cmFjdGlvbiBkb2VzIG5vdCB0ZXN0IGludmVyc2Ugc3lzdGVtcy4iLCJEIjoiUG9pbnR3aXNlIG11bHRpcGxpY2F0aW9uIHRvIHplcm8gd291bGQgbm90IHJlcHJlc2VudCBpZGVudGl0eSBiZWhhdmlvci4ifSwiaGludCI6IlRyYW5zZmVyLWZ1bmN0aW9uIG11bHRpcGxpY2F0aW9uIGNvcnJlc3BvbmRzIHRvIHRpbWUtZG9tYWluIGNvbnZvbHV0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgc2F5cyBhbiBhY2N1bXVsYXRvciBhbmQgYSBiYWNrd2FyZC1kaWZmZXJlbmNlIHN5c3RlbSBhcmUgaW52ZXJzZXMgYmVjYXVzZSBvbmUgJ2FkZHMnIGFuZCB0aGUgb3RoZXIgaGFzIGEgbWludXMgc2lnbi4gR2l2ZSB0aGUgcHJlY2lzZSB0cmFuc2Zlci1mdW5jdGlvbiByZWFzb24gaW5zdGVhZC4iLCJpZGVhbF9hbnN3ZXIiOiJUaGV5IGFyZSBpbnZlcnNlcyBiZWNhdXNlIHRoZSBiYWNrd2FyZC1kaWZmZXJlbmNlIHRyYW5zZmVyIGZ1bmN0aW9uIGlzIHRoZSByZWNpcHJvY2FsIG9mIHRoZSBhY2N1bXVsYXRvciB0cmFuc2ZlciBmdW5jdGlvbjogaWYgdGhlIGFjY3VtdWxhdG9yIGhhcyBcXChIW3pdID0gei8oei0xKVxcKSwgdGhlbiB0aGUgaW52ZXJzZSBoYXMgXFwoSF9pW3pdID0gKHotMSkvelxcKSwgc28gdGhlaXIgY2FzY2FkZSBwcm9kdWN0IGlzIDEuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBtZW50aW9uIHJlY2lwcm9jYWwgdHJhbnNmZXIgZnVuY3Rpb25zLCBub3QganVzdCBvcHBvc2l0ZSBvcGVyYXRpb25zLiIsIk11c3QgaWRlbnRpZnkgXFwoei8oei0xKVxcKSBhbmQgXFwoKHotMSkvelxcKSBhcyB0aGUgaW52ZXJzZSBwYWlyLiIsIk11c3Qgc3RhdGUgdGhhdCB0aGVpciBjYXNjYWRlIHByb2R1Y3QgZXF1YWxzIDEuIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCB1bmRlcnN0YW5kcyBpbnZlcnNlIHN5c3RlbXMgYWxnZWJyYWljYWxseSBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdmFndWUgd29yZGluZy4iLCJoaW50IjoiVXNlIFxcKEhbel1cXCxIX2lbel0gPSAxXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfV19" style="display:none;"></div>%%KC_END%%
