%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc3Vic2VjdGlvbiBoYXMgbm8gYXZhaWxhYmxlIGNyb3BwZWQgdGV4dGJvb2sgZmlndXJlIGZvciB0aGUgMF4tIHZlcnN1cyAwXisgZGlzdGluY3Rpb24sIGFuZCBzdGFuZGFyZCBXaWtpcGVkaWEvV2lraW1lZGlhIHZpc3VhbHMgZG8gbm90IGRpcmVjdGx5IHRlYWNoIHRoZSBMYXRoaS1zcGVjaWZpYyBMXi0gdmVyc3VzIExeKyBpbml0aWFsLWNvbmRpdGlvbiBjb252ZW50aW9uLiBVc2UgR1BUSW1hZ2UyIG9ubHkgZm9yIGN1c3RvbSBsZWN0dXJlLW5vdGUgdmlzdWFsczogb25lIHRpbWVsaW5lIGZvciB0aGUgMF4tIC8gMF4rIG1pc2NvbmNlcHRpb24gYW5kIG9uZSBjb21wYXJpc29uIGNoYXJ0IGZvciBMXi0gdmVyc3VzIExeKy4iLCJjcmFtIjoiVXNlIHZpc3VhbHMgdG8gaW5zdGFudGx5IGlkZW50aWZ5IHdoZXRoZXIgYW4gZXhhbSBzdGF0ZW1lbnQgaXMgYXNraW5nIGFib3V0IHByZS1pbnB1dCBjb25kaXRpb25zLCBwb3N0LWlucHV0IGNvbmRpdGlvbnMsIG9yIHRyYW5zZm9ybSBjb252ZW50aW9uLiIsInN0YW5kYXJkIjoiVXNlIHZpc3VhbHMgdG8gY29ubmVjdCB6ZXJvLWlucHV0LCB6ZXJvLXN0YXRlLCBhbmQgdG90YWwgcmVzcG9uc2UgdG8gdGhlIGV4YWN0IGluc3RhbnQgYXJvdW5kIHQgPSAwLiIsInRvcF9zY29yZSI6IlVzZSB2aXN1YWxzIHRvIGV4cG9zZSB0aGUgc3VidGxlIHRyYXAgdGhhdCBuYXR1cmFsL2ZvcmNlZCBzZXBhcmF0aW9uIGlzIG5vdCBlcXVpdmFsZW50IHRvIHplcm8taW5wdXQvemVyby1zdGF0ZSBzZXBhcmF0aW9uLiJ9" style="display:none;"></div>%%KC_END%%
# Comments on Initial Conditions at 0⁻ and at 0⁺

> **Section Objective:** Learn why initial conditions at \(t=0^-\) and \(t=0^+\) are not interchangeable when an input is applied at \(t=0\).

---

## Concepts In This Section

- initial conditions at \(0^-\)
- initial conditions at \(0^+\)
- zero-input response
- zero-state response
- \(L^-\) versus \(L^+\) Laplace transform
- natural/forced versus zero-input/zero-state separation

## 1. What \(0^-\) and \(0^+\) Actually Mean

The notation \(0^-\) refers to the instant **just before** the input is applied, while \(0^+\) refers to the instant **just after** the switching or input action at \(t=0\).

Suppose a problem gives \(y(0^-)=2\) and \(\dot{y}(0^-)=1\). If you compute the total response and find a different derivative value at \(t=0\), that is **not a contradiction** — it is expected behavior. The zero-state response is created by the input at \(t=0\), so it contributes nothing before that instant.

> **Minimal Example:** If a switch closes at \(t=0\), the stored energy just before switching belongs to \(0^-\), not to the input-created response.

### KEY INSIGHT

The \(0^-\) initial conditions describe the system's stored energy **before** the input acts. They are satisfied by the zero-input response, not by the total response.

## 2. Why the \(L^-\) convention is preferred in system analysis

The total response splits into two independent contributions:

- \(y_{\mathrm{ZI}}(t)\): **zero-input response** — caused only by initial stored energy; exists even when the input is zero.
- \(y_{\mathrm{ZS}}(t)\): **zero-state response** — caused only by the applied input; assumes zero initial energy.

**When to use:** Any exam question asking for response decomposition.

**Common misuse:** Using the total response evaluated at \(0^+\) to verify initial conditions that were explicitly stated at \(0^-\). Those conditions belong to \(y_{\mathrm{ZI}}\) alone.

$$y_{\mathrm{total}}(t) = y_{\mathrm{ZI}}(t) + y_{\mathrm{ZS}}(t)$$

$$y_{\mathrm{ZS}}(0^-) = 0$$
*The zero-state component has not started before the input is applied at \(t=0\). It is identically zero for all \(t < 0\).

**Consequence:** Initial conditions stated at \(0^-\) must be checked against \(y_{\mathrm{ZI}}\) only — never against the total response.

**Exam trigger:** Phrases such as *'input starts at \(t=0\)'* or *'initial conditions are given at \(0^-\)'* signal that you must separate the two components.

**Common misuse:** Assuming \(0^-\), \(0\), and \(0^+\) are automatically identical. They can differ whenever the input or its derivatives are discontinuous at the origin.*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="trap_exposure" data-visual-use-b64="eyJjcmFtIjoiTWFrZSBzdHVkZW50cyBpbnN0YW50bHkgY2hvb3NlIHplcm8taW5wdXQgcmVzcG9uc2Ugd2hlbiB0aGV5IHNlZSBpbml0aWFsIGNvbmRpdGlvbnMgYXQgXFwoMF4tXFwpLiIsInN0YW5kYXJkIjoiU2hvdyB0aGUgdGltZSBib3VuZGFyeSB3aGVyZSB0aGUgemVyby1zdGF0ZSByZXNwb25zZSBiZWdpbnMgY29udHJpYnV0aW5nLiIsInRvcF9zY29yZSI6IkhpZ2hsaWdodCB0aGF0IFxcKDBeLVxcKSBhbmQgXFwoMF4rXFwpIG1heSBkaWZmZXIgZXZlbiB3aGVuIHRoZSBub3RhdGlvbiBsb29rcyBuZWFybHkgaWRlbnRpY2FsLiJ9" style="display:none;"></div>%%KC_END%%
*🎨 Notice the exact boundary at \(t=0\): only the zero-input response is active to the left; the zero-state response begins contributing only to the right.*
![Illustration](/generated/gptimage2-1781413875085-9887.png)

## 2. Why the \(L^-\) Convention Is Preferred in System Analysis

This textbook uses the **\(L^-\) Laplace-transform convention**, which evaluates initial conditions at \(t=0^-\). This choice is deliberate: it supports a clean separation of the zero-input response from the zero-state response, so engineers can study the effect of stored energy independently from the effect of the applied input.

The older **\(L^+\) convention** uses initial conditions at \(t=0^+\) and excludes the origin from the transform integral. Under \(L^+\), the decomposition available is only the classical *natural response plus forced response* — which is **not** the same as zero-input plus zero-state.

### DELTA-FUNCTION TRAP

Under \(L^+\), the impulse \(\delta(t)\) is located exactly at the origin, which is excluded by the \(0^+\) lower limit. As a result, \(\mathcal{L}_{+}\{\delta(t)\} = 0\) — a result that breaks standard impulse-response analysis.

#### Warning

Do not apply \(L^-\)-based impulse results to an \(L^+\) integral. The two conventions give different answers at the origin.

$$\mathcal{L}_{+}\{x(t)\} = \int_{0^{+}}^{\infty} x(t)\, e^{-st}\, dt$$
*This is the \(L^+\) Laplace transform definition: the lower limit is \(0^+\), which **excludes the origin**.

- \(x(t)\): the input signal
- \(s\): the complex Laplace variable
- \(e^{-st}\): the transform kernel

**When to use:** Only when a source explicitly states the \(L^+\) convention.

**Exam trigger:** Wording such as *'initial conditions at \(0^+\)'* or *'integral begins at \(0^+\)'*.

**Common misuse:** Applying ordinary engineering \(L^-\)-based impulse results (where \(\mathcal{L}\{\delta(t)\}=1\)) to an \(L^+\) integral, where the impulse at the origin is missed entirely.*

$$\mathcal{L}_{+}\{\delta(t)\} = 0$$
*This result follows directly from the \(L^+\) definition: since \(\delta(t)\) is concentrated entirely at \(t=0\), and the \(L^+\) integral starts at \(0^+\), the impulse lies **outside** the integration region and contributes nothing.

**Why it matters:** This is the clearest warning sign that \(L^+\) is awkward for system analysis involving impulses or impulsive inputs.

**Common misuse:** Assuming every Laplace convention gives \(\mathcal{L}\{\delta(t)\}=1\). Under \(L^+\), the answer is \(0\), not \(1\).*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="comparison_anchor" data-visual-use-b64="eyJjcmFtIjoiVHVybiBjb252ZW50aW9uIHdvcmRzIGludG8gYSBxdWljayBkZWNpc2lvbiB0YWJsZTogXFwoTF4tXFwpIG1lYW5zIFxcKDBeLVxcKSBhbmQgemVyby1pbnB1dC96ZXJvLXN0YXRlLiIsInN0YW5kYXJkIjoiQ2xhcmlmeSB3aHkgXFwoTF4tXFwpIGlzIGJldHRlciBmb3Igc2VwYXJhdGluZyB0aGUgZWZmZWN0IG9mIHN0b3JlZCBlbmVyZ3kgZnJvbSB0aGUgZWZmZWN0IG9mIHRoZSBpbnB1dC4iLCJ0b3Bfc2NvcmUiOiJFeHBvc2UgdGhlIG5vbi1lcXVpdmFsZW5jZSBiZXR3ZWVuIG5hdHVyYWwvZm9yY2VkIHNlcGFyYXRpb24gYW5kIHplcm8taW5wdXQvemVyby1zdGF0ZSBzZXBhcmF0aW9uLiJ9" style="display:none;"></div>%%KC_END%%
*🎨 Notice which column supports zero-input/zero-state separation (left, \(L^-\)) and which is limited to natural/forced decomposition with an impulse trap (right, \(L^+\)).*
![Illustration](/generated/gptimage2-1781414024101-4367.png)

---
**📌 Key Takeaways**
- \(0^-\) is before the input acts; \(0^+\) is after — they can differ whenever the input is discontinuous at \(t=0\).
- Total response decomposes as \(y_{\mathrm{total}}(t)=y_{\mathrm{ZI}}(t)+y_{\mathrm{ZS}}(t)\); check \(0^-\) conditions against \(y_{\mathrm{ZI}}\) only.
- \(y_{\mathrm{ZS}}(0^-)=0\): the zero-state component is absent before the input is applied at \(t=0\).
- \(L^+\) convention: \(\mathcal{L}_{+}\{x(t)\}=\int_{0^{+}}^{\infty}x(t)e^{-st}\,dt\) and \(\mathcal{L}_{+}\{\delta(t)\}=0\) — impulse at origin is missed.
- \(L^-\) supports zero-input/zero-state separation; \(L^+\) supports only natural/forced separation and creates impulse traps.

*Next, we use these initial-condition conventions to compute zero-state responses systematically.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6Inplcm9fbWludXNfdnNfemVyb19wbHVzIiwibGFiZWwiOiJJbml0aWFsIGNvbmRpdGlvbnMgYXQgMF4tIHZlcnN1cyAwXisiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgcHJvYmxlbSBzdGF0ZXMgXFwoeSgwXi0pPTJcXCkgYW5kIFxcKFxcZG90e3l9KDBeLSk9MVxcKS4gV2hpY2ggcmVzcG9uc2UgY29tcG9uZW50IG11c3Qgc2F0aXNmeSB0aG9zZSBnaXZlbiBpbml0aWFsIGNvbmRpdGlvbnM/Iiwib3B0aW9ucyI6WyJBLiBUaGUgemVyby1pbnB1dCByZXNwb25zZSIsIkIuIFRoZSB6ZXJvLXN0YXRlIHJlc3BvbnNlIiwiQy4gVGhlIGZvcmNlZCByZXNwb25zZSBvbmx5IiwiRC4gVGhlIHRvdGFsIHJlc3BvbnNlIGV2YWx1YXRlZCBhZnRlciB0aGUgaW5wdXQgYWN0cyJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkF0IFxcKDBeLVxcKSwgdGhlIGlucHV0IGhhcyBub3QgeWV0IGNyZWF0ZWQgdGhlIHplcm8tc3RhdGUgcmVzcG9uc2UsIHNvIHRoZSBnaXZlbiBpbml0aWFsIGNvbmRpdGlvbnMgYXJlIHNhdGlzZmllZCBieSB0aGUgemVyby1pbnB1dCByZXNwb25zZS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgemVyby1zdGF0ZSByZXNwb25zZSBpcyBjYXVzZWQgYnkgdGhlIGlucHV0LCBzbyBpdCBpcyBub3QgcHJlc2VudCBiZWZvcmUgXFwodD0wXFwpLiIsIkMiOiJGb3JjZWQgcmVzcG9uc2UgaXMgbm90IHRoZSBzYW1lIGFzIHplcm8taW5wdXQgcmVzcG9uc2UgYW5kIGlzIG5vdCB0aGUgY29udmVudGlvbiBlbXBoYXNpemVkIGhlcmUuIiwiRCI6IlRoZSB0b3RhbCByZXNwb25zZSBhZnRlciB0aGUgaW5wdXQgYWN0cyBjYW4gc2F0aXNmeSBkaWZmZXJlbnQgXFwoMF4rXFwpIGNvbmRpdGlvbnMuIn0sImhpbnQiOiJBc2sgd2hhdCBleGlzdHMganVzdCBiZWZvcmUgdGhlIGlucHV0IGlzIGFwcGxpZWQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJPYnNlcnZlIGEgdGltZWxpbmUgd2hlcmUgdGhlIGlucHV0IGFycm93IGlzIHBsYWNlZCBleGFjdGx5IGF0IFxcKHQ9MFxcKS4gVGhlIHJlZ2lvbiBqdXN0IGxlZnQgb2YgdGhlIGFycm93IGlzIGxhYmVsZWQgXFwoMF4tXFwpLiBXaGF0IHNob3VsZCBiZSBhY3RpdmUgdGhlcmU/Iiwib3B0aW9ucyI6WyJBLiBaZXJvLWlucHV0IHJlc3BvbnNlIG9ubHkiLCJCLiBaZXJvLXN0YXRlIHJlc3BvbnNlIG9ubHkiLCJDLiBaZXJvLWlucHV0IGFuZCB6ZXJvLXN0YXRlIHJlc3BvbnNlIGVxdWFsbHkiLCJELiBObyByZXNwb25zZSBvZiBhbnkga2luZCJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkJlZm9yZSB0aGUgaW5wdXQgaXMgYXBwbGllZCwgb25seSB0aGUgcmVzcG9uc2UgZHVlIHRvIHN0b3JlZCBpbml0aWFsIGVuZXJneSBjYW4gZXhpc3QuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiWmVyby1zdGF0ZSByZXNwb25zZSByZXF1aXJlcyB0aGUgaW5wdXQgdG8gaGF2ZSBhY3RlZC4iLCJDIjoiVGhlIHplcm8tc3RhdGUgY29tcG9uZW50IGJlZ2lucyBiZWNhdXNlIG9mIHRoZSBpbnB1dCBhdCBcXCh0PTBcXCksIG5vdCBiZWZvcmUgaXQuIiwiRCI6IlN0b3JlZCBlbmVyZ3kgY2FuIGNyZWF0ZSBhIHplcm8taW5wdXQgcmVzcG9uc2UgZXZlbiBiZWZvcmUgdGhlIGlucHV0IHN0YXJ0cy4ifSwiaGludCI6IlRoZSBsZWZ0IHNpZGUgb2YgdGhlIHN3aXRjaGluZyBpbnN0YW50IGJlbG9uZ3MgdG8gcHJlLWlucHV0IGJlaGF2aW9yLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ0aW1lbGluZV92aXN1YWxfY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6InJlc3BvbnNlX2RlY29tcG9zaXRpb24iLCJsYWJlbCI6IlRvdGFsIHJlc3BvbnNlIGFzIHplcm8taW5wdXQgcGx1cyB6ZXJvLXN0YXRlIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBmb3JtdWxhIGNvcnJlY3RseSBzdGF0ZXMgdGhlIHJlc3BvbnNlIGRlY29tcG9zaXRpb24gdXNlZCBpbiB0aGlzIHNlY3Rpb24/Iiwib3B0aW9ucyI6WyJBLiBcXCh5X3tcXG1hdGhybXt0b3RhbH19KHQpPXlfe1xcbWF0aHJte1pJfX0odCkreV97XFxtYXRocm17WlN9fSh0KVxcKSIsIkIuIFxcKHlfe1xcbWF0aHJte3RvdGFsfX0odCk9eV97XFxtYXRocm17Wkl9fSh0KS15X3tcXG1hdGhybXtaU319KHQpXFwpIiwiQy4gXFwoeV97XFxtYXRocm17Wkl9fSh0KT15X3tcXG1hdGhybXt0b3RhbH19KHQpK3lfe1xcbWF0aHJte1pTfX0odClcXCkiLCJELiBcXCh5X3tcXG1hdGhybXtaU319KDBeLSk9eV97XFxtYXRocm17dG90YWx9fSgwXispXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVGhlIHRvdGFsIHJlc3BvbnNlIGlzIHRoZSBzdW0gb2YgdGhlIHplcm8taW5wdXQgcmVzcG9uc2UgYW5kIHRoZSB6ZXJvLXN0YXRlIHJlc3BvbnNlLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSBkZWNvbXBvc2l0aW9uIGlzIGFkZGl0aXZlLCBub3Qgc3VidHJhY3RpdmUuIiwiQyI6IlRoaXMgcmVhcnJhbmdlcyB0aGUgdGVybXMgaW5jb3JyZWN0bHkgZm9yIHRoZSBzdGF0ZWQgZGVjb21wb3NpdGlvbi4iLCJEIjoiVGhlIHplcm8tc3RhdGUgcmVzcG9uc2UgYXQgXFwoMF4tXFwpIGlzIHplcm87IGl0IGlzIG5vdCBnZW5lcmFsbHkgdGhlIHBvc3QtaW5wdXQgdG90YWwgcmVzcG9uc2UuIn0sImhpbnQiOiJaZXJvLWlucHV0IGFuZCB6ZXJvLXN0YXRlIGFyZSB0d28gY29udHJpYnV0aW9ucyB0byB0aGUgc2FtZSBvdXRwdXQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgc2F5czogJ0lmIHRoZSB0b3RhbCByZXNwb25zZSBnaXZlcyBhIGRpZmZlcmVudCBkZXJpdmF0aXZlIGF0IFxcKHQ9MFxcKSwgdGhlbiB0aGUgaW5pdGlhbCBjb25kaXRpb24gYXQgXFwoMF4tXFwpIG11c3QgYmUgd3JvbmcuJyBFeHBsYWluIHdoeSB0aGlzIGlzIGluY29ycmVjdC4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgaW5pdGlhbCBjb25kaXRpb24gYXQgXFwoMF4tXFwpIGlzIGNoZWNrZWQgYmVmb3JlIHRoZSBpbnB1dCBhY3RzLCBzbyBpdCBiZWxvbmdzIHRvIHRoZSB6ZXJvLWlucHV0IHJlc3BvbnNlLiBUaGUgdG90YWwgcmVzcG9uc2UgaW5jbHVkZXMgdGhlIHplcm8tc3RhdGUgY29tcG9uZW50IGNyZWF0ZWQgYnkgdGhlIGlucHV0IGF0IFxcKHQ9MFxcKSwgc28gaXRzIFxcKDBeK1xcKSBiZWhhdmlvciBjYW4gZGlmZmVyLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCBcXCgwXi1cXCkgaXMgYmVmb3JlIHRoZSBpbnB1dCBhY3RzIiwiTXVzdCBpZGVudGlmeSB6ZXJvLWlucHV0IHJlc3BvbnNlIGFzIHRoZSBjb21wb25lbnQgc2F0aXNmeWluZyBcXCgwXi1cXCkgY29uZGl0aW9ucyIsIk11c3Qgc3RhdGUgdGhhdCB0aGUgdG90YWwgcmVzcG9uc2UgaW5jbHVkZXMgdGhlIGlucHV0LWNyZWF0ZWQgemVyby1zdGF0ZSBjb21wb25lbnQiLCJNdXN0IGF2b2lkIGNsYWltaW5nIHRoYXQgXFwoMF4tXFwpIGFuZCBcXCgwXitcXCkgYXJlIGFsd2F5cyBlcXVhbCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgY2FuIGV4cGxhaW4gdGhlIG1haW4gbWlzY29uY2VwdGlvbiBpbiB3b3Jkcywgbm90IGp1c3QgY2hvb3NlIGEgZm9ybXVsYS4iLCJoaW50IjoiU2VwYXJhdGUgJ3N0b3JlZCBlbmVyZ3kgYmVmb3JlIHN3aXRjaGluZycgZnJvbSAncmVzcG9uc2UgYWZ0ZXIgdGhlIGlucHV0IGJlZ2lucycuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoibG1pbnVzX3ZzX2xwbHVzIiwibGFiZWwiOiJMXi0gdmVyc3VzIExeKyBMYXBsYWNlIGNvbnZlbnRpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3RhdGVtZW50IGJlc3QgZGVzY3JpYmVzIHRoZSBcXChMXitcXCkgTGFwbGFjZS10cmFuc2Zvcm0gY29udmVudGlvbiBkaXNjdXNzZWQgaW4gdGhlIHNlY3Rpb24/Iiwib3B0aW9ucyI6WyJBLiBJdCB1c2VzIGFuIGludGVncmFsIGJlZ2lubmluZyBhdCBcXCgwXitcXCksIGV4Y2x1ZGluZyB0aGUgb3JpZ2luLiIsIkIuIEl0IHVzZXMgaW5pdGlhbCBjb25kaXRpb25zIGF0IFxcKDBeLVxcKSBhbmQgY2xlYW5seSBzZXBhcmF0ZXMgemVyby1pbnB1dCBhbmQgemVyby1zdGF0ZSByZXNwb25zZS4iLCJDLiBJdCBhbHdheXMgZ2l2ZXMgdGhlIHNhbWUgdHJhbnNmb3JtIGZvciBcXChcXGRlbHRhKHQpXFwpIGFzIHRoZSBlbmdpbmVlcmluZyBcXChMXi1cXCkgY29udmVudGlvbi4iLCJELiBJdCBhdm9pZHMgYWxsIGltcHVsc2UtcmVsYXRlZCBkaWZmaWN1bHRpZXMgYnkgaW5jbHVkaW5nIHRoZSBvcmlnaW4uIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVGhlIFxcKExeK1xcKSBjb252ZW50aW9uIGludGVncmF0ZXMgZnJvbSBcXCgwXitcXCkgdG8gXFwoXFxpbmZ0eVxcKSwgc28gdGhlIG9yaWdpbiBpcyBleGNsdWRlZC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGF0IGRlc2NyaWJlcyB0aGUgcHJlZmVycmVkIFxcKExeLVxcKSB2aWV3cG9pbnQsIG5vdCBcXChMXitcXCkuIiwiQyI6IlRoZSBzZWN0aW9uIGV4cGxpY2l0bHkgbm90ZXMgdGhlIGltcHVsc2UtYXQtb3JpZ2luIHByb2JsZW0gdW5kZXIgXFwoTF4rXFwpLiIsIkQiOiJcXChMXitcXCkgZXhjbHVkZXMgdGhlIG9yaWdpbjsgaXQgZG9lcyBub3QgaW5jbHVkZSBpdC4ifSwiaGludCI6Ikxvb2sgYXQgdGhlIGxvd2VyIGxpbWl0IG9mIHRoZSBpbnRlZ3JhbC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIHRoZSBcXChMXitcXCkgY29udmVudGlvbiwgd2h5IGRvZXMgXFwoXFxtYXRoY2Fse0x9X3srfVxce1xcZGVsdGEodClcXH09MFxcKT8iLCJvcHRpb25zIjpbIkEuIEJlY2F1c2UgdGhlIGltcHVsc2UgaXMgY29uY2VudHJhdGVkIGF0IFxcKHQ9MFxcKSwgYW5kIFxcKDBcXCkgaXMgZXhjbHVkZWQgYnkgdGhlIFxcKDBeK1xcKSBsb3dlciBsaW1pdCIsIkIuIEJlY2F1c2UgYWxsIGltcHVsc2UgdHJhbnNmb3JtcyBhcmUgemVybyBpbiBldmVyeSBMYXBsYWNlIGNvbnZlbnRpb24iLCJDLiBCZWNhdXNlIFxcKGVeey1zdH1cXCkgaXMgemVybyBhdCBcXCh0PTBcXCkiLCJELiBCZWNhdXNlIFxcKFxcZGVsdGEodClcXCkgaXMgdGhlIHNhbWUgYXMgXFwodSh0KVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBcXChMXitcXCkgaW50ZWdyYWwgc3RhcnRzIGFmdGVyIHRoZSBvcmlnaW4sIHNvIGl0IG1pc3NlcyB0aGUgaW1wdWxzZSBsb2NhdGVkIGF0IHRoZSBvcmlnaW4uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyBpcyBub3QgdHJ1ZSBmb3IgdGhlIHVzdWFsIGVuZ2luZWVyaW5nIGNvbnZlbnRpb24uIiwiQyI6IkF0IFxcKHQ9MFxcKSwgXFwoZV57LXN0fT0xXFwpLCBub3QgemVyby4iLCJEIjoiVGhlIGltcHVsc2UgXFwoXFxkZWx0YSh0KVxcKSBhbmQgdGhlIHVuaXQgc3RlcCBcXCh1KHQpXFwpIGFyZSBkaWZmZXJlbnQgc2lnbmFscy4ifSwiaGludCI6IldoZXJlIGlzIHRoZSBlbnRpcmUgaW1wdWxzZSBsb2NhdGVkPyIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMyIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiT2JzZXJ2ZSBhIGNvbXBhcmlzb24gY2hhcnQgd2l0aCBcXChMXi1cXCkgb24gdGhlIGxlZnQgYW5kIFxcKExeK1xcKSBvbiB0aGUgcmlnaHQuIFdoaWNoIHBhaXJpbmcgaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIFxcKExeLVxcKTogemVyby1pbnB1dC96ZXJvLXN0YXRlIHNlcGFyYXRpb247IFxcKExeK1xcKTogbmF0dXJhbC9mb3JjZWQgc2VwYXJhdGlvbiIsIkIuIFxcKExeLVxcKTogbmF0dXJhbC9mb3JjZWQgc2VwYXJhdGlvbiBvbmx5OyBcXChMXitcXCk6IHplcm8taW5wdXQvemVyby1zdGF0ZSBzZXBhcmF0aW9uIiwiQy4gQm90aCBjb252ZW50aW9ucyBlcXVhbGx5IHN1cHBvcnQgemVyby1pbnB1dC96ZXJvLXN0YXRlIHNlcGFyYXRpb24iLCJELiBOZWl0aGVyIGNvbnZlbnRpb24gY2FuIGJlIHVzZWQgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnMiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgc2VjdGlvbiBzYXlzIHRoZSBcXChMXi1cXCkgdmlld3BvaW50IGFsaWducyB3aXRoIHplcm8taW5wdXQvemVyby1zdGF0ZSBzZXBhcmF0aW9uLCB3aGlsZSBcXChMXitcXCkgYWxpZ25zIHdpdGggdGhlIGNsYXNzaWNhbCBuYXR1cmFsL2ZvcmNlZCBhcHByb2FjaC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIHJldmVyc2VzIHRoZSB0d28gY29udmVudGlvbnMuIiwiQyI6IlRoZSBzZWN0aW9uIGVtcGhhc2l6ZXMgdGhhdCBcXChMXitcXCkgaXMgYXdrd2FyZCBiZWNhdXNlIGl0IGNhbm5vdCBjbGVhbmx5IHNlcGFyYXRlIHplcm8taW5wdXQgYW5kIHplcm8tc3RhdGUgY29tcG9uZW50cy4iLCJEIjoiQm90aCB1c2UgaW5pdGlhbC1jb25kaXRpb24gaWRlYXMsIGJ1dCBhdCBkaWZmZXJlbnQgc2lkZXMgb2YgXFwodD0wXFwpLiJ9LCJoaW50IjoiVGhlIHByZWZlcnJlZCBlbmdpbmVlcmluZyBjb252ZW50aW9uIGlzIHRoZSBvbmUgdGhhdCBzZXBhcmF0ZXMgaW5wdXQgZWZmZWN0IGZyb20gc3RvcmVkLWVuZXJneSBlZmZlY3QuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImNvbXBhcmlzb25fdGFibGVfdmlzdWFsX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19XX0=" style="display:none;"></div>%%KC_END%%
