from django import forms
from captcha.fields import ReCaptchaField
from captcha.widgets import ReCaptchaV3

class FormContacto(forms.Form):
    name = forms.CharField(
        label= "",
        widget=forms.TextInput(attrs={'placeholder':'Nombre'})
    )
    email = forms.EmailField(
        label= "",
        widget=forms.TextInput(attrs={'placeholder':'Email'})
    )
    phone = forms.CharField(
        label= "",
        widget=forms.TextInput(attrs={'placeholder':'Teléfono'})
    )
    content = forms.CharField(
        label= "",
        widget=forms.Textarea(attrs={'placeholder':'¿Cómo podemos ayudarte?'})
    )
    pol = forms.BooleanField(label='Acepto política de privacidad',
        required=True    
    )
    
    captcha = ReCaptchaField(
        label="",
        widget=ReCaptchaV3
    )

class FormContactoEN(forms.Form):
    name = forms.CharField(
        label= "",
        widget=forms.TextInput(attrs={'placeholder':'Name'})
    )
    email = forms.EmailField(
        label= "",
        widget=forms.TextInput(attrs={'placeholder':'Email'})
    )
    phone = forms.CharField(
        label= "",
        widget=forms.TextInput(attrs={'placeholder':'Phone'})
    )
    content = forms.CharField(
        label= "",
        widget=forms.Textarea(attrs={'placeholder':'How can we help you?'})
    )
    pol = forms.BooleanField(label='I accept the privacy policy terms',
        required=True
    )
    captcha = ReCaptchaField(
        label="",
        widget=ReCaptchaV3
    )