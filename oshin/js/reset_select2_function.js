 $(document).ready(function(){
                                    var daysArray=
                                    [{id:'mon',text:'Monday'},
                                    {id:'tue',text:'Tuesday'},
                                    {id:'wed',text:'Wednesday'},
                                    {id:'thur',text:'Thursday'},
                                    {id:'fri',text:'Friday'},
                                    {id:'sat',text:'Saturday'},
                                    {id:'sun',text:'Sunday'}];
                                    $('#basic').select2({
                                        data:daysArray,
                                        multiple:true,
                                        placeholder:"Select days from List",
                                        width:200
                                    });
                                    $('#reset_btn').click(function(){
                                        $('#basic').val('').trigger("change");
                                    });
                                   
                                });